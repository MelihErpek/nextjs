"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { GithubIcon, HeyGenLogo } from "./Icons";
import { ThemeSwitch } from "./ThemeSwitch";

export default function NavBar() {
  return (
    <div className="w-full flex justify-center  bg-white p-6">
        <Link isExternal aria-label="HeyGen" href="https://app.heygen.com/">
          <HeyGenLogo />
        </Link>
          <p className="text-xl font-semibold text-red-700 mt-1 ml-2">
            UM Turkey
          </p>
      {/* <NavbarContent justify="center">
        <NavbarItem className="flex flex-row items-center gap-4">
          <Link
            isExternal
            color="foreground"
            href="https://app.heygen.com/interactive-avatar"
          >
            Avatars
          </Link>
          <Link
            isExternal
            color="foreground"
            href="https://docs.heygen.com/reference/list-voices-v2"
          >
            Voices
          </Link>
          <Link
            isExternal
            color="foreground"
            href="https://docs.heygen.com/reference/new-session-copy"
          >
            API Docs
          </Link>
          <Link
            isExternal
            color="foreground"
            href="https://help.heygen.com/en/articles/9182113-interactive-avatar-101-your-ultimate-guide"
          >
            Guide
          </Link>
          <Link
            isExternal
            aria-label="Github"
            href="https://github.com/HeyGen-Official/StreamingAvatarSDK"
            className="flex flex-row justify-center gap-1 text-foreground"
          >
            <GithubIcon className="text-default-500" />
            SDK
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent> */}
    </div>
  );
}
