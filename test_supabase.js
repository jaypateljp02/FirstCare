
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ehvrcyllauhuqbldbdsm.supabase.co';
const supabaseAnonKey = 'sb_publishable_LmHyqojttKmlLekNvlKn4Q_2KdtNh4Z';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
    console.log('Testing Supabase connection...');
    try {
        const { data, error } = await supabase.from('offers').select('count', { count: 'exact', head: true });
        if (error) {
            console.error('Connection failed:', error.message);
        } else {
            console.log('Connection successful!');
        }
    } catch (err) {
        console.error('Unexpected error:', err.message);
    }
}

testConnection();
