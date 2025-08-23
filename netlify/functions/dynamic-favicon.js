function handler(event, context) {
  const path = event.path;
  let favicon = "/icons/default-icon.png";
  let ogImage = "https://silvinayalma.netlify.app/icons/default-icon.png";

  if (path.includes("/f")) {
    favicon = "/icons/f-icon.png";
    ogImage = "https://silvinayalma.netlify.app/icons/f-icon.png";
  } else if (path.includes("/2")) {
    favicon = "/icons/pareja-icon.png";
    ogImage = "https://silvinayalma.netlify.app/icons/pareja-icon.png";
  }

  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>50's Bday</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="/style.css" />
      <link rel="icon" href="${favicon}" type="image/png" />
      <meta property="og:title" content="Silvina y Alma - 50's Birthday 🎉" />
      <meta property="og:description" content="26 de septiembre en Club de Regatas Corrientes. ¡No faltes!" />
      <meta property="og:image" content="${ogImage}" />
      <meta property="og:url" content="https://silvinayalma.netlify.app${path}" />
      <meta property="og:type" content="website" />
    </head>
    <body>
      <!-- Your existing body content here -->
      <script src="/script.js"></script>
    </body>
    </html>
  `;

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: html,
  };
}

exports.handler = handler;