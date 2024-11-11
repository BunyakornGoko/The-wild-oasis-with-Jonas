import { createClient } from "@supabase/supabase-js"

export const supabaseUrl = "https://qwmzijtgweeagkmjnvgy.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3bXppanRnd2VlYWdrbWpudmd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwNTUyNDksImV4cCI6MjA0NjYzMTI0OX0.8aM5NIbyOCbvygQBXmH2IDOQmTOxESB9lkgAuWQ3RaI"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
