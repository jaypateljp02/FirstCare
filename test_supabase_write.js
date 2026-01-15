
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ehvrcyllauhuqbldbdsm.supabase.co';
const supabaseAnonKey = 'sb_publishable_LmHyqojttKmlLekNvlKn4Q_2KdtNh4Z';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testWrite() {
    console.log('Testing Supabase WRITE access...');
    const dummyOffer = {
        icon_name: 'Tag',
        title: 'Test Offer',
        original_price: '₹1000',
        offer_price: '₹500',
        discount: '50% OFF',
        description: 'Test Description',
        features: ['Test Feature'],
        color: 'blue'
    };

    try {
        const { data, error } = await supabase.from('offers').insert(dummyOffer).select();
        if (error) {
            console.error('Write failed:', error.message);
        } else {
            console.log('Write successful! ID:', data[0].id);
            // Cleanup
            const { error: delError } = await supabase.from('offers').delete().eq('id', data[0].id);
            if (delError) console.error('Cleanup failed:', delError.message);
            else console.log('Cleanup successful');
        }
    } catch (err) {
        console.error('Unexpected error:', err.message);
    }
}

testWrite();
