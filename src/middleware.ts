import { NextRequest, NextResponse } from "next/server";

const countries = ["kg", "ru", "kz"];
const locales = ["ru", "ky", "en"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const segments = pathname.split("/").filter(Boolean);

  // теперь: /ru/kg
  const hasValidStructure =
    segments.length >= 2 &&
    locales.includes(segments[0]) &&
    countries.includes(segments[1]);

  if (hasValidStructure) {
    return NextResponse.next();
  }

  const country = await getCountryByIp(request);

  // locale по умолчанию
  const locale = "ru";

  return NextResponse.redirect(new URL(`/${locale}/${country}`, request.url));
}

async function getCountryByIp(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";

  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`, {
      cache: "no-store",
    });

    const data = await res.json();

    const code = (data.country_code || "").toUpperCase();

    switch (code) {
      case "KG":
        return "kg";
      case "RU":
        return "ru";
      case "KZ":
        return "kz";
      default:
        return "kg";
    }
  } catch {
    return "kg";
  }
}

export const config = {
  matcher: ["/((?!api|_next|admin|.*\\..*).*)"],
};
