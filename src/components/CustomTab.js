import React from 'react';
import { Tabs } from 'flowbite-react';

const CustomTab = ({ }) => {
    const customTheme = {
        "tablist": {
            "tabitem": {
                "base": "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-2 focus:ring-gray-300",
                "variant": {
                    "default": {
                        "base": "rounded-t-lg",
                        "active": {
                            "on": "text-white bg-blue-800 dark:bg-red-300 dark:text-cyan-500",
                            "off": "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                        }
                    },
                },
            }
        },
    };

    return (
        <Tabs aria-label="project types" variant="default" theme={customTheme}>
            <Tabs.Item active title="Urban planning">
                We conduct topographic surveys, adjust parceling according to local urban variables, and modify terraces based on the original topography and external drainage requirements.
            </Tabs.Item>
            <Tabs.Item title="Water management systems">
                Our water management systems include the development of aqueducts, sewer systems, and drainage projects for urban areas. We also design potable water systems (both cold and hot) and sanitary installations with appropriate stormwater disposal in buildings, as well as swimming pools for private or public use, including the necessary suction, recirculation pipes, and structural solutions tailored to the environment.
            </Tabs.Item>
            <Tabs.Item title="Architectural design">
                For housing and buildings, we develop architectural and structural projects in accordance with local regulations.
            </Tabs.Item>
            <Tabs.Item title="Structural engineering">
                Our bridge designs encompass pedestrian, vehicular, and service bridges, using materials and methods such as reinforced concrete, metal beams, and pre-tensioned or post-tensioned structures, as well as suspension bridges.
            </Tabs.Item>
            <Tabs.Item title="Sanitary installations">
                We handle the design and implementation of sanitary installations, ensuring proper potable water systems and effective stormwater disposal in buildings.
            </Tabs.Item>
        </Tabs>
    );
}

export default CustomTab;