import React from "react";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <div className="flex items-center gap-1">
        <Label className="font-federiconigro-wixstudio-com-semantic-label font-[number:var(--federiconigro-wixstudio-com-semantic-label-font-weight)] text-federiconigrowixstudiocomcod-gray text-[length:var(--federiconigro-wixstudio-com-semantic-label-font-size)] tracking-[var(--federiconigro-wixstudio-com-semantic-label-letter-spacing)] leading-[var(--federiconigro-wixstudio-com-semantic-label-line-height)] [font-style:var(--federiconigro-wixstudio-com-semantic-label-font-style)]">
          Email
        </Label>
        <span className="font-federiconigro-wixstudio-com-semantic-label font-[number:var(--federiconigro-wixstudio-com-semantic-label-font-weight)] text-federiconigrowixstudiocomcod-gray text-[length:var(--federiconigro-wixstudio-com-semantic-label-font-size)] tracking-[var(--federiconigro-wixstudio-com-semantic-label-letter-spacing)] leading-[var(--federiconigro-wixstudio-com-semantic-label-line-height)] [font-style:var(--federiconigro-wixstudio-com-semantic-label-font-style)]">
          *
        </span>
      </div>

      <Input
        type="email"
        placeholder="Email"
        className="w-full bg-federiconigrowixstudiocomwild-sand rounded-md px-3 py-[9px] font-federiconigro-wixstudio-com-semantic-input font-[number:var(--federiconigro-wixstudio-com-semantic-input-font-weight)] text-federiconigrowixstudiocomtundora text-[length:var(--federiconigro-wixstudio-com-semantic-input-font-size)] tracking-[var(--federiconigro-wixstudio-com-semantic-input-letter-spacing)] leading-[var(--federiconigro-wixstudio-com-semantic-input-line-height)] [font-style:var(--federiconigro-wixstudio-com-semantic-input-font-style)] border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};
