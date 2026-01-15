
const { createClient } = require('@supabase/supabase-js');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const supabaseUrl = 'https://ehvrcyllauhuqbldbdsm.supabase.co';
const supabaseAnonKey = 'sb_publishable_LmHyqojttKmlLekNvlKn4Q_2KdtNh4Z';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const filePath = path.join(__dirname, 'first care package list - updated.xlsx');
console.log('Reading file:', filePath);
const workbook = XLSX.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

const icons = ['Tag', 'Percent', 'Gift'];
const colors = ['blue', 'green', 'purple', 'pink', 'orange'];

async function seedOffers() {
    console.log('Starting seed process...');

    // 1. Delete existing offers to avoid duplicates/stale data
    console.log('Clearing existing offers...');
    const { error: deleteError } = await supabase.from('offers').delete().neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all
    if (deleteError) {
        console.error('Error clearing offers:', deleteError.message);
        // Continue anyway? Might result in duplicates.
    }

    // 2. Prepare new offers
    const offersToInsert = data.map((row, index) => {
        const tests = row.Tests ? row.Tests.split('\r\n').map(t => t.trim()).filter(Boolean) : [];
        const sampleTypes = row['Sample Type'] ? row['Sample Type'].split('\r\n').map(s => 'Sample: ' + s.trim()).filter(Boolean) : [];
        const features = [...sampleTypes, ...tests];

        return {
            icon_name: icons[index % icons.length],
            title: row['Test / Package Name'],
            original_price: `₹${Math.round(row.MRP)}`,
            offer_price: `₹${row['DISCOUNT PRICE']}`,
            discount: `${Math.round(row.DISCOUNT * 100)}% OFF`,
            description: `Comprehensive package including ${tests.slice(0, 3).join(', ')}${tests.length > 3 ? '...' : ''}`,
            features: features,
            color: colors[index % colors.length]
        };
    });

    console.log(`Prepared ${offersToInsert.length} offers for insertion.`);

    // 3. Insert in batches (Supabase might have limits)
    const BATCH_SIZE = 10;
    for (let i = 0; i < offersToInsert.length; i += BATCH_SIZE) {
        const batch = offersToInsert.slice(i, i + BATCH_SIZE);
        console.log(`Inserting batch ${i / BATCH_SIZE + 1}...`);

        const { error: insertError } = await supabase.from('offers').insert(batch);
        if (insertError) {
            console.error('Error inserting batch:', insertError.message);
        } else {
            console.log('Batch inserted successfully.');
        }
    }

    console.log('Seeding completed!');
}

seedOffers();
