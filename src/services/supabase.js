import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mksxjsuhmltfcwijidkf.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rc3hqc3VobWx0ZmN3aWppZGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzOTU3OTYsImV4cCI6MjA1MDk3MTc5Nn0.P270WVpSizmnOQ1UhNkEYAkCBfeMt23QlGU_TxcZS2s`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
