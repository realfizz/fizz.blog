import { siteConfig, type SocialLink } from "@/settings/config";
import { WaveIcon } from "@/components/ui/wave-icon";
import { DiscordIcon } from "@/components/ui/discord-icon";
import { GitHubIcon } from "@/components/ui/github-icon";

function getSocialIcon(name: string) {
  if (name.toLowerCase().includes("github")) return <GitHubIcon />;
  if (name.toLowerCase().includes("discord")) return <DiscordIcon />;
  return <WaveIcon />;
}

function SocialButton({ link }: { link: SocialLink }) {
  return (
    <a target="_blank" href={link.url} rel="noopener noreferrer">
      <button className="inline-flex h-6 items-center justify-center gap-2 rounded-md bg-zinc-800 px-2.5 py-2 text-xs font-medium text-white shadow-[0px_8px_16px_-4px_#0000001a,0px_4px_8px_-2px_#0000001a,0px_2px_4px_-1px_#0000001a,0px_1px_2px_0px_#0000001a,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33] transition-colors hover:bg-zinc-700 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0">
        {getSocialIcon(link.name)}
        <span>{link.name}</span>
        {link.memberCount && (
          <span className="jetbrains-mono text-xs text-neutral-400">
            ({link.memberCount.toLocaleString()})
          </span>
        )}
      </button>
    </a>
  );
}

export function Hero() {
  const { hero, socials } = siteConfig;

  return (
    <div className="space-y-4">
      <div className="jetbrains-mono flex items-center gap-1.5 text-xs tracking-tighter text-muted-light">
        <span>{hero.greeting}</span>
        <WaveIcon />
      </div>
      <h1 className="doto-font text-2xl font-bold">
        <span>{hero.name}</span>{" "}
        <a
          className="group"
          target="_blank"
          href={hero.handleUrl}
          rel="noopener noreferrer"
        >
          <span className="jetbrains-mono text-xs font-light tracking-tight text-muted-light transition-colors duration-200 group-hover:text-white">
            / <span className="text-xxs">@</span>
            {hero.handle}
          </span>
          </a>
          <div className="pt-4">
            <p className="text-sm">
              {hero.taglinePrefix}{" "}
              <span className="font-medium text-white">
                {hero.taglineHighlights[0]}
              </span>{" "}
              &{" "}
              <span className="font-medium text-white">
                {hero.taglineHighlights[1]}
              </span>
            </p>
          </div>
      </h1>
      <div className="flex items-center gap-2">
        {socials.map((link) => (
          <SocialButton key={link.name} link={link} />
        ))}
      </div>
    </div>
  );
}

