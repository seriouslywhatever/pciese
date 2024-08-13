import React from 'react';
import { Tabs } from 'flowbite-react';
import { useTranslation } from 'react-i18next';

const CustomTab = ({ }) => {
    const { t } = useTranslation();

    const customTheme = {
        "tablist": {
            "tabitem": {
                "base": "flex items-center justify-center rounded-t-lg p-2 text-sm font-medium first:ml-0 focus:outline-none focus:ring-2 focus:ring-gray-300",
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
            <Tabs.Item active title={t('Tab item 1 title')}>
                {t('Tab item 1')}
            </Tabs.Item>
            <Tabs.Item title={t('Tab item 2 title')}>
                {t('Tab item 2')}
            </Tabs.Item>
            <Tabs.Item title={t('Tab item 3 title')}>
                {t('Tab item 3')}
            </Tabs.Item>
            <Tabs.Item title={t('Tab item 4 title')}>
                {t('Tab item 4')}
            </Tabs.Item>
            <Tabs.Item title={t('Tab item 5 title')}>
                {t('Tab item 5')}
            </Tabs.Item>
        </Tabs>
    );
}

export default CustomTab;