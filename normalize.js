const components_settings = {
  header: [
    {
      name: "Header",
      rows: [
        {
          name: "",
          components: [
            {
              label: "Alignment",
              field: "header.alignment",
              type: "radio-button",
              default: "left",
              width: "100%",
              options: [
                {
                  display: "",
                  value: "left",
                  icon: "textalign-left",
                },
                {
                  display: "",
                  value: "center",
                  icon: "textalign-center",
                },
                {
                  display: "",
                  value: "right",
                  icon: "textalign-right",
                },
              ],
            },
          ],
        },
        {
          name: "Title",
          components: [
            {
              field: "header.title",
              type: "input-text",
              default: "",
              width: "100%",
              placeholder: "ex: BarChart",
            },
          ],
        },
        {
          name: "Style",
          components: [
            {
              label: "Font Size",
              field: "header.title_size",
              type: "radio-button",
              default: "other",
              width: "80%",
              options: [
                {
                  display: "Small",
                  value: "small",
                },
                {
                  display: "Large",
                  value: "large",
                },
                {
                  display: "...",
                  value: "other",
                },
              ],
              if: {
                "$me = small": {
                  "header.title_font_size": 18,
                },
                "$me = large": {
                  "header.title_font_size": 40,
                },
              },
            },
            {
              label: " ",
              field: "header.title_font_size",
              type: "input-number",
              default: 24,
              width: "20%",
              if: {
                "$me = 18": {
                  "header.title_size": "small",
                },
                "$me = 40": {
                  "header.title_size": "large",
                },
                "$me != 18 && $me != 40": {
                  "header.title_size": "other",
                },
              },
            },
            {
              label: "Title Color",
              field: "header.title_color",
              type: "color-picker",
              default: "#0C0C0C",
              width: "100%",
            },
          ],
          collapse: true,
        },
        {
          name: "Subtitle",
          components: [
            {
              field: "header.subtitle",
              type: "input-text",
              default: "",
              width: "100%",
            },
          ],
        },
        {
          name: "Style",
          components: [
            {
              label: "Font Size",
              field: "header.subtitle_size",
              type: "radio-button",
              default: "other",
              width: "80%",
              options: [
                {
                  display: "Small",
                  value: "small",
                },
                {
                  display: "Large",
                  value: "large",
                },
                {
                  display: "...",
                  value: "other",
                },
              ],
              if: {
                "$me = small": {
                  "header.subtitle_font_size": 18,
                },
                "$me = large": {
                  "header.subtitle_font_size": 40,
                },
              },
            },
            {
              label: " ",
              field: "header.subtitle_font_size",
              type: "input-number",
              default: 16,
              width: "20%",
              if: {
                "$me = 18": {
                  "header.subtitle_size": "small",
                },
                "$me = 40": {
                  "header.subtitle_size": "large",
                },
                "$me != 18 && $me != 40": {
                  "header.subtitle_size": "other",
                },
              },
            },
            {
              label: "Color",
              field: "header.subtitle_color",
              type: "color-picker",
              default: "#8F8F8F",
              width: "100%",
            },
          ],
          collapse: true,
        },
        {
          name: "Text",
          components: [
            {
              field: "header.text",
              type: "input-textarea",
              default: "",
              width: "100%",
            },
          ],
        },
        {
          name: "Style",
          components: [
            {
              label: "Font Size",
              field: "header.text_size",
              type: "radio-button",
              default: "other",
              width: "80%",
              options: [
                {
                  display: "Small",
                  value: "small",
                },
                {
                  display: "Large",
                  value: "large",
                },
                {
                  display: "...",
                  value: "other",
                },
              ],
              if: {
                "$me = small": {
                  "header.text_font_size": 18,
                },
                "$me = large": {
                  "header.text_font_size": 40,
                },
              },
            },
            {
              label: " ",
              field: "header.text_font_size",
              type: "input-number",
              default: 16,
              width: "20%",
              if: {
                "$me = 18": {
                  "header.text_size": "small",
                },
                "$me = 40": {
                  "header.text_size": "large",
                },
                "$me != 18 && $me != 40": {
                  "header.text_size": "other",
                },
              },
            },
            {
              label: "Color",
              field: "header.text_color",
              type: "color-picker",
              default: "#0C0C0C",
              width: "100%",
            },
          ],
          collapse: true,
        },
        {
          name: "Border",
          components: [
            {
              label: "border",
              field: "header.border",
              type: "switch",
              default: false,
              width: "100%",
            },
            {
              show_if: {
                "header.border": true,
              },
              label: "Type",
              field: "header.border_type",
              type: "radio-button",
              default: "solid",
              width: "100%",
              options: [
                {
                  display: "Solid",
                  value: "solid",
                },
                {
                  display: "Dash",
                  value: "dash",
                },
              ],
            },
            {
              show_if: {
                "header.border": true,
              },
              label: "Color",
              field: "header.border_color",
              type: "color-picker",
              default: "#cbcbcb",
              width: "100%",
            },
            {
              show_if: {
                "header.border": true,
              },
              label: "Width (px)",
              field: "header.border_width",
              type: "input-slider",
              default: 1,
              width: "100%",
              min: 0,
              max: 10,
              step: 1,
            },
          ],
        },
        {
          name: "",
          show_if: {
            "header.border": true,
            "header.border_type": "dash",
          },
          components: [
            {
              label: "Dash",
              field: "header.border_dash",
              type: "input-number",
              default: 5,
              width: "50%",
            },
            {
              label: "Gap",
              field: "header.border_gap",
              type: "input-number",
              default: 5,
              width: "50%",
            },
          ],
        },
      ],
    },
  ],
  footer: [
    {
      name: "Footer",
      rows: [
        {
          name: "",
          components: [
            {
              label: "Alignment",
              field: "footer.alignment",
              type: "radio-button",
              default: "left",
              width: "100%",
              options: [
                {
                  display: "",
                  value: "left",
                  icon: "textalign-left",
                },
                {
                  display: "",
                  value: "center",
                  icon: "textalign-center",
                },
                {
                  display: "",
                  value: "right",
                  icon: "textalign-right",
                },
              ],
            },
          ],
        },
        {
          name: "Source",
          components: [
            {
              label: "Source Label",
              field: "footer.source_label",
              type: "input-text",
              default: "",
              width: "100%",
              placeholder: "ex: source:",
            },
            {
              label: "Url Name",
              field: "footer.url_name",
              type: "input-text",
              default: "",
              width: "100%",
              placeholder: "ex: plotset",
            },
            {
              label: "Url",
              field: "footer.url",
              type: "input-text",
              default: "",
              width: "100%",
              placeholder: "ex: https://plotset.com",
            },
          ],
        },
        {
          name: "Style",
          components: [
            {
              label: "Font Size",
              field: "footer.source_size",
              type: "radio-button",
              default: "other",
              width: "80%",
              options: [
                {
                  display: "Small",
                  value: "small",
                },
                {
                  display: "Large",
                  value: "large",
                },
                {
                  display: "...",
                  value: "other",
                },
              ],
              if: {
                "$me = small": {
                  "footer.source_font_size": 18,
                },
                "$me = large": {
                  "footer.source_font_size": 40,
                },
              },
            },
            {
              label: " ",
              field: "footer.source_font_size",
              type: "input-number",
              default: 12,
              width: "20%",
              if: {
                "$me = 18": {
                  "footer.source_size": "small",
                },
                "$me = 40": {
                  "footer.source_size": "large",
                },
                "$me != 18 && $me != 40": {
                  "footer.source_size": "other",
                },
              },
            },
            {
              label: "Color",
              field: "footer.source_color",
              type: "color-picker",
              default: "#0C0C0C",
              width: "100%",
            },
          ],
          collapse: true,
        },
        {
          name: "Note 1",
          components: [
            {
              field: "footer.note1_text",
              type: "input-textarea",
              default: "",
              width: "100%",
              placeholder: "ex: from reliable and up to date sources",
            },
          ],
        },
        {
          name: "Style",
          components: [
            {
              label: "Font Size",
              field: "footer.note1_size",
              type: "radio-button",
              default: "other",
              width: "80%",
              options: [
                {
                  display: "Small",
                  value: "small",
                },
                {
                  display: "Large",
                  value: "large",
                },
                {
                  display: "...",
                  value: "other",
                },
              ],
              if: {
                "$me = small": {
                  "footer.note1_font_size": 18,
                },
                "$me = large": {
                  "footer.note1_font_size": 40,
                },
              },
            },
            {
              label: " ",
              field: "footer.note1_font_size",
              type: "input-number",
              default: 12,
              width: "20%",
              if: {
                "$me = 18": {
                  "footer.note1_size": "small",
                },
                "$me = 40": {
                  "footer.note1_size": "large",
                },
                "$me != 18 && $me != 40": {
                  "footer.note1_size": "other",
                },
              },
            },
            {
              label: "Color",
              field: "footer.note1_color",
              type: "color-picker",
              default: "#0C0C0C",
              width: "100%",
            },
          ],
          collapse: true,
        },
        {
          name: "Note 2",
          components: [
            {
              field: "footer.note2_text",
              type: "input-textarea",
              default: "",
              width: "100%",
              placeholder: "ex: from reliable and up to date sources",
            },
          ],
        },
        {
          name: "Style",
          components: [
            {
              label: "Font Size",
              field: "footer.note2_size",
              type: "radio-button",
              default: "other",
              width: "80%",
              options: [
                {
                  display: "Small",
                  value: "small",
                },
                {
                  display: "Large",
                  value: "large",
                },
                {
                  display: "...",
                  value: "other",
                },
              ],
              if: {
                "$me = small": {
                  "footer.note2_font_size": 18,
                },
                "$me = large": {
                  "footer.note2_font_size": 40,
                },
              },
            },
            {
              label: " ",
              field: "footer.note2_font_size",
              type: "input-number",
              default: 12,
              width: "20%",
              if: {
                "$me = 18": {
                  "footer.note2_size": "small",
                },
                "$me = 40": {
                  "footer.note2_size": "large",
                },
                "$me != 18 && $me != 40": {
                  "footer.note2_size": "other",
                },
              },
            },
            {
              label: "Color",
              field: "footer.note2_color",
              type: "color-picker",
              default: "#0C0C0C",
              width: "100%",
            },
          ],
          collapse: true,
        },
        {
          name: "Border",
          components: [
            {
              label: "border",
              field: "footer.border",
              type: "switch",
              default: false,
              width: "100%",
            },
            {
              show_if: {
                "footer.border": true,
              },
              label: "Type",
              field: "footer.border_type",
              type: "radio-button",
              default: "solid",
              width: "100%",
              options: [
                {
                  display: "Solid",
                  value: "solid",
                },
                {
                  display: "Dash",
                  value: "dash",
                },
              ],
            },
            {
              show_if: {
                "footer.border": true,
              },
              label: "Color",
              field: "footer.border_color",
              type: "color-picker",
              default: "#cbcbcb",
              width: "100%",
            },
            {
              show_if: {
                "footer.border": true,
              },
              label: "Width (px)",
              field: "footer.border_width",
              type: "input-slider",
              default: 1,
              width: "100%",
              min: 0,
              max: 10,
              step: 1,
            },
          ],
        },
        {
          name: "",
          show_if: {
            "footer.border": true,
            "footer.border_type": "dash",
          },
          components: [
            {
              label: "Dash",
              field: "footer.border_dash",
              type: "input-number",
              default: 5,
              width: "50%",
            },
            {
              label: "Gap",
              field: "footer.border_gap",
              type: "input-number",
              default: 5,
              width: "50%",
            },
          ],
        },
      ],
    },
  ],
};
const normalizeTheme = (component) => {
  const default_colors = {
    mono: ["#0C5097"],
    spectrum: ["#0C5097", "#D7E9FC"],
    multi: [
      "#0C5097",
      "#59C4E6",
      "#EDAFDA",
      "#93B7E3",
      "#A5E7F0",
      "#CBB0E3",
      "#D6E3B0",
      "#E3B0B0",
    ],
  };
  const default_bg_color = "#fff";
  const defaultPaletteType = "mono";
  const theme = component?.default ?? defaultPaletteType;
  const advancedMode = component.advancedMode;
  const newComponent = {
    field: "palette",
    type: "theme",
    default: {
      type: theme,
      colors: default_colors?.[theme] ?? default_colors[defaultPaletteType],
      bg_color: default_bg_color,
    },
  };
  if (advancedMode) {
    if (typeof advancedMode == "boolean") {
      newComponent.default.advancedModeSupports = ["multi"];
    } else {
      newComponent.default.advancedModeSupports = advancedMode;
    }
    newComponent.default.isAdvancedMode = false;
  }
  return newComponent;
};

const normalize = (settings) => {
  let newSettings = [...settings];
  for (
    let settings_index = 0;
    settings_index < settings.length;
    settings_index++
  ) {
    const setting_item = settings[settings_index];

    for (let row_index = 0; row_index < setting_item.rows.length; row_index++) {
      const components = setting_item.rows[row_index].components;
      for (
        let component_index = 0;
        component_index < components.length;
        component_index++
      ) {
        let component = components[component_index];
        switch (component.type) {
          case "theme":
            component = normalizeTheme(component);
            break;
        }
        newSettings[settings_index].rows[row_index].components[
          component_index
        ] = component;

        // when develoepr want to use a prebuilt component , then we add the component rows to user settings rows , then remove it's identifier component
        if (components_settings[component.type]) {
          // add component rows to parent group rows list
          newSettings[settings_index].rows.push(
            ...components_settings[component.type][0].rows
          );
          // remove component by index
          newSettings[settings_index].rows[row_index].components.splice(
            component_index,
            1
          );
        }
      }
    }
  }
  return newSettings;
};
module.exports = normalize;
