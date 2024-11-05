import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

const loggedInRoutes = ["/", "/profile", "/project", "/invites", "/history"];
const loggedOutRoutes = ["/login", "/signup"];


export default async function AuthMiddleware(
  req: NextRequest
): Promise<NextResponse> {
  if (
    !loggedInRoutes.some((path) =>
      req.nextUrl.pathname.startsWith(path)) &&
    !loggedOutRoutes.some((path) => req.nextUrl.pathname.startsWith(path))
  ) {
    return NextResponse.next();
  } else {
    const myCookie = cookies();

    let token: string | null = null;
    if (myCookie.get("token")) {
      token = myCookie.get("token")!.value;
    }

    if (
      !token &&
      loggedInAsAdminPath.some((path) => req.nextUrl.pathname.startsWith(path))
    ) {
      return NextResponse.redirect("/login");
    } else if (
      token &&
      loggedOutPath.some((path) => req.nextUrl.pathname.startsWith(path))
    ) {
      return NextResponse.redirect("/");
    }
  }

  return NextResponse.next();
}