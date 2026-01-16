import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://wdmoznpmbhcdmjsbobpw.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_V_7e77s3WUwxFGXYtlz6Iw_Pde5-udN";

window.supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("Supabase carregado:", window.supabase);
