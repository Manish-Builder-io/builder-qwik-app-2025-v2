import {  Blocks,  BuilderBlock } from "@builder.io/sdk-qwik";

import { component$ } from '@builder.io/qwik';

export default component$(
    ({
         title,
         subtitle,
        builderBlock,
        extraContent,
         imageContent2,
     }: {
        title: string;
        subtitle: string;
        extraContent: BuilderBlock[];
        imageContent2: BuilderBlock[];
        builderBlock: { id: string };
    }) => {
        return (
             <section class="relative isolate md:pt-20">
                <div class="relative z-40 mx-auto max-w-3xl px-3 lg:max-w-5xl lg:px-8">
                    <div class="text-center">
                        <h1
                            class="text-heading-5 md:text-heading-2 lg:text-heading-1"
                            dangerouslySetInnerHTML={title}
                        />
                        <div class="flex justify-center">
                            <p class="my-6 w-full max-w-[700px] text-body-16 md:text-body-20">
                                {subtitle}
                            </p>
                        </div>
                        <div class={`flex flex-col items-center gap-4`}>
                            <Blocks
                                parent={builderBlock.id}
                                path="component.options.extraContent"
                                blocks={extraContent}
                            />
                        </div>
                    </div>
                </div>
                <div
                    class={`mx-auto max-w-full`}
                >
                    <Blocks
                        parent={builderBlock.id}
                        path="component.options.imageContent2"
                        blocks={imageContent2}
                    />
                </div>
            </section>
        );
    },
);