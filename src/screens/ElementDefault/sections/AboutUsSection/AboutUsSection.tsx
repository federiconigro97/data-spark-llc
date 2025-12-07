import React from "react";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";

export const AboutUsSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <Label
        htmlFor="firstName"
        className="font-federiconigro-wixstudio-com-semantic-label font-[number:var(--federiconigro-wixstudio-com-semantic-label-font-weight)] text-federiconigrowixstudiocomcod-gray text-[length:var(--federiconigro-wixstudio-com-semantic-label-font-size)] tracking-[var(--federiconigro-wixstudio-com-semantic-label-letter-spacing)] leading-[var(--federiconigro-wixstudio-com-semantic-label-line-height)] [font-style:var(--federiconigro-wixstudio-com-semantic-label-font-style)]"
      >
        First name
      </Label>

      <Input
        id="firstName"
        type="text"
        placeholder="First name"
        className="w-full bg-federiconigrowixstudiocomwild-sand rounded-md px-3 py-[9px] font-federiconigro-wixstudio-com-semantic-input font-[number:var(--federiconigro-wixstudio-com-semantic-input-font-weight)] text-federiconigrowixstudiocomtundora text-[length:var(--federiconigro-wixstudio-com-semantic-input-font-size)] tracking-[var(--federiconigro-wixstudio-com-semantic-input-letter-spacing)] leading-[var(--federiconigro-wixstudio-com-semantic-input-line-height)] [font-style:var(--federiconigro-wixstudio-com-semantic-input-font-style)] border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};
