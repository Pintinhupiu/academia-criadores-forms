import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabse/server";

export async function POST(req: Request) {
  try {
    const { formSlug, utmSource, utmMedium, utmCampaign, referrer, pathname } = await req.json();

    const { data, error } = await supabaseAdmin
      .from("form_sessions")
      .insert({
        form_slug: formSlug,
        utm_source: utmSource ?? null,
        utm_medium: utmMedium ?? null,
        utm_campaign: utmCampaign ?? null,
        referrer: referrer ?? null,
        entry_path: pathname ?? null,
      })
      .select("id, form_slug, current_step, status")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}