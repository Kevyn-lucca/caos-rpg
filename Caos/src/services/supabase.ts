import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string = process.env.SUPABASE_URL || '';
const supabaseKey: string = process.env.SUPABASE_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  throw new Error('keys não estão definidas nas variaveis de ambiente');
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
