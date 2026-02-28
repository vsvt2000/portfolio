import { FAQs } from "@/utils/constants";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import React from "react";

function HistoryDisclosure() {
  return (
    <div>
      {" "}
      <div className="h-screen w-full px-4 pt-32">
        <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-blue-950">
                {FAQs.map((pair,index)=>

          <Disclosure key={index}  as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="font-bold italic text-white group-data-hover:text-white/80">
                {pair.question}
              </span>
              <ChevronDownIcon className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="font-semibold mt-2 text-sm/5 text-white/80">
              {pair.answer}
            </DisclosurePanel>
          </Disclosure>
                  )}

        </div>
      </div>
    </div>
  );
}

export default HistoryDisclosure;
