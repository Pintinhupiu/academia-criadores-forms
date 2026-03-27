import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabse/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      sessionId,
      formSlug,
      stepIndex,
      fieldKey,
      questionLabel,
      answerText,
      answerJson,
      currentStep,
      completed,
      leadName,
      leadEmail,
      leadPhone,
      instagramHandle,
      redirectChoice,
    } = body;

    const { error: answerError } = await supabaseAdmin
      .from("form_answers")
      .upsert(
        {
          session_id: sessionId,
          form_slug: formSlug,
          step_index: stepIndex,
          field_key: fieldKey,
          question_label: questionLabel,
          answer_text: answerText ?? null,
          answer_json: answerJson ?? null,
        },
        { onConflict: "session_id,field_key" }
      );

    if (answerError) {
      return NextResponse.json({ error: answerError.message }, { status: 500 });
    }

    const sessionUpdate: Record<string, unknown> = {
      current_step: currentStep,
    };

    if (leadName) sessionUpdate.lead_name = leadName;
    if (leadEmail) sessionUpdate.lead_email = leadEmail;
    if (leadPhone) sessionUpdate.lead_phone = leadPhone;
    if (instagramHandle) sessionUpdate.instagram_handle = instagramHandle;
    if (redirectChoice) sessionUpdate.redirect_choice = redirectChoice;
    if (completed) sessionUpdate.status = "completed";

    const { error: sessionError } = await supabaseAdmin
      .from("form_sessions")
      .update(sessionUpdate)
      .eq("id", sessionId);

    if (sessionError) {
      return NextResponse.json({ error: sessionError.message }, { status: 500 });
    }

    await supabaseAdmin.from("form_events").insert({
      session_id: sessionId,
      event_type: completed ? "question_answered_and_completed" : "question_answered",
      payload: {
        formSlug,
        stepIndex,
        fieldKey,
      },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}