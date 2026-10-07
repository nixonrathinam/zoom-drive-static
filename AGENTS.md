# Project Instructions & Rules

## Strict Image Handling Directive

When the user uploads, attaches, or selects an image:
- **NEVER** generate, regenerate, recreate, enhance, restyle, modify, or replace that image using AI or `generate_image`.
- The uploaded or selected image MUST be displayed **EXACTLY as the original image** with 100% fidelity.
- Use the original uploaded image file directly in the website UI (via direct file/blob/dataURL rendering).
- **DO NOT** send the image to any image-generation model.
- Preserve the original subject, face, clothes, vehicle, colors, background, resolution, and details without exception.
- Do not apply any AI transformation, style filters, or variations.
- Do not create alternative or AI-generated versions.
- Do not use AI-generated placeholders or substitute images.
- Only invoke AI generation or editing if the user explicitly requests an AI transformation.
- The image preview must always be sourced directly from the user's uploaded file, blob, or asset.
