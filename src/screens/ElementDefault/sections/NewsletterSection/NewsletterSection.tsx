import React from "react";

const footerData = {
  address: "5830 East 2nd Street, STE 7000, Casper, WY 82609",
  ein: "EIN: 38-4298308",
  copyright: "Copyright © 2026, Data Spark LLC. All rights reserved.",
};

export const NewsletterSection = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
        <div className="flex flex-col gap-0">
          <p className="text-body-sm text-gray-500">
            {footerData.address}
          </p>
          <p className="text-body-sm text-gray-500">
            {footerData.ein}
          </p>
        </div>

        <div className="flex-shrink-0">
          <p className="text-body text-gray-600">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </div>
  );
};
