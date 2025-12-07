import React from "react";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

export const PortfolioSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <div className="flex items-center gap-1">
        <Label className="font-federiconigro-wixstudio-com-semantic-label font-[number:var(--federiconigro-wixstudio-com-semantic-label-font-weight)] text-federiconigrowixstudiocomcod-gray text-[length:var(--federiconigro-wixstudio-com-semantic-label-font-size)] tracking-[var(--federiconigro-wixstudio-com-semantic-label-letter-spacing)] leading-[var(--federiconigro-wixstudio-com-semantic-label-line-height)] [font-style:var(--federiconigro-wixstudio-com-semantic-label-font-style)]">
          Message
        </Label>
        <span className="font-federiconigro-wixstudio-com-semantic-label font-[number:var(--federiconigro-wixstudio-com-semantic-label-font-weight)] text-federiconigrowixstudiocomcod-gray text-[length:var(--federiconigro-wixstudio-com-semantic-label-font-size)] tracking-[var(--federiconigro-wixstudio-com-semantic-label-letter-spacing)] leading-[var(--federiconigro-wixstudio-com-semantic-label-line-height)] [font-style:var(--federiconigro-wixstudio-com-semantic-label-font-style)]">
          *
        </span>
      </div>

      <Textarea
        placeholder="Message"
        className="min-h-[92px] bg-federiconigrowixstudiocomwild-sand rounded-md font-federiconigro-wixstudio-com-semantic-textarea font-[number:var(--federiconigro-wixstudio-com-semantic-textarea-font-weight)] text-federiconigrowixstudiocomtundora text-[length:var(--federiconigro-wixstudio-com-semantic-textarea-font-size)] tracking-[var(--federiconigro-wixstudio-com-semantic-textarea-letter-spacing)] leading-[var(--federiconigro-wixstudio-com-semantic-textarea-line-height)] [font-style:var(--federiconigro-wixstudio-com-semantic-textarea-font-style)] border-0 resize-none"
      />
    </div>
  );
};
