import React, { useState } from "react";
import PropTypes from "prop-types";
import MDEditor, { commands } from "@uiw/react-md-editor";
import MediaLib from "../MediaLib";
import styled from "styled-components";
import "@uiw/react-markdown-preview/dist/markdown.css";
import "@uiw/react-md-editor/dist/markdown-editor.css";
import { Stack } from "@strapi/design-system/Stack";
import { Box } from "@strapi/design-system/Box";
import { Typography } from "@strapi/design-system/Typography";
import { useIntl } from "react-intl";

const Wrapper = styled.div`
  > div:nth-child(2) {
    display: none;
  }
  .w-md-editor-bar {
    display: none;
  }
  .w-md-editor {
    border: 1px solid #dcdce4;
    border-radius: 4px;
    box-shadow: none;
    &:focus-within {
      border: 1px solid #4945ff;
      box-shadow: #4945ff 0px 0px 0px 2px;
    }
    min-height: 400px;
    display: flex;
    flex-direction: column;
    img {
      max-width: 100%;
    }
    .w-md-editor-preview {
      display: block;
      strong {
        font-weight: bold;
      }
      em {
        font-style: italic;
      }
    }
  }
  .w-md-editor-content {
    flex: 1 1 auto;
  }
  .w-md-editor-fullscreen {
    z-index: 3;
  }
  .w-md-editor-text {
    margin: 0;
  }
  .wmde-markdown {
    display: none;
  }
  .w-md-editor-preview ol {
    list-style: auto;
  }
`;

const Editor = ({
  name,
  onChange,
  value,
  intlLabel,
  disabled,
  error,
  description,
  required,
}) => {
  const { formatMessage } = useIntl();
  const [mediaLibVisible, setMediaLibVisible] = useState(false);
  const [mediaLibSelection, setMediaLibSelection] = useState(-1);

  const handleToggleMediaLib = () => setMediaLibVisible((prev) => !prev);

  const handleChangeAssets = (assets) => {
    let newValue = value ? value : "";
    assets.map((asset) => {
      if (asset.mime.includes("image")) {
        const imgTag = ` ![](${asset.url}) `;
        if (mediaLibSelection > -1) {
          newValue =
            value.substring(0, mediaLibSelection) +
            imgTag +
            value.substring(mediaLibSelection);
        } else {
          newValue = `${newValue}${imgTag}`;
        }
      }
      // Handle videos and other type of files by adding some code
    });
    onChange({ target: { name, value: newValue || "" } });
    handleToggleMediaLib();
  };
  return (
    <Stack size={1}>
      <Box>
        <Typography variant="pi" fontWeight="bold">
          {formatMessage(intlLabel)}
        </Typography>
        {required && (
          <Typography variant="pi" fontWeight="bold" textColor="danger600">
            *
          </Typography>
        )}
      </Box>
      <Wrapper>
        <MDEditor
          disabled={disabled}
          commands={[
            commands.title1,
            commands.title2,
            commands.title3,
            commands.title4,
            commands.title5,
            commands.title6,
            commands.divider,
            commands.bold,
            commands.codeBlock,
            commands.italic,
            commands.strikethrough,
            commands.hr,
            commands.group,
            commands.divider,
            commands.link,
            commands.quote,
            commands.code,
            {
              name: "image",
              keyCommand: "image",
              buttonProps: { "aria-label": "Insert image" },
              icon: (
                <svg width="12" height="12" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z"
                  ></path>
                </svg>
              ),
              execute: (state, api) => {
                setMediaLibSelection(state.selection.end);
                handleToggleMediaLib();
              },
            },
            commands.unorderedListCommand,
            commands.orderedListCommand,
            commands.checkedListCommand,
            commands.divider,
            commands.codeEdit,
            commands.codeLive,
            commands.codePreview,
            commands.divider,
            commands.fullscreen,
            {
              name: "table",
              keyCommand: "table",
              buttonProps: { "aria-label": "Insert table" },
              icon: (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.875 1.875H1.125C0.917578 1.875 0.75 2.04258 0.75 2.25V9.75C0.75 9.95742 0.917578 10.125 1.125 10.125H10.875C11.0824 10.125 11.25 9.95742 11.25 9.75V2.25C11.25 2.04258 11.0824 1.875 10.875 1.875ZM10.4062 4.3125H7.92188V2.71875H10.4062V4.3125ZM10.4062 6.9375H7.92188V5.0625H10.4062V6.9375ZM4.82812 5.0625H7.17188V6.9375H4.82812V5.0625ZM7.17188 4.3125H4.82812V2.71875H7.17188V4.3125ZM1.59375 5.0625H4.07812V6.9375H1.59375V5.0625ZM1.59375 2.71875H4.07812V4.3125H1.59375V2.71875ZM1.59375 7.6875H4.07812V9.28125H1.59375V7.6875ZM4.82812 7.6875H7.17188V9.28125H4.82812V7.6875ZM10.4062 9.28125H7.92188V7.6875H10.4062V9.28125Z"
                    fill="currentColor"
                  ></path>
                </svg>
              ),
              children: ({ close, execute, getState, textApi }) => {
                const rows = 5;
                const columns = 5;

                return (
                  <div style={{ padding: 10 }}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplate: `repeat(${rows}, 16px) / repeat(${columns}, 16px)`,
                      }}
                    >
                      {Array.from(Array(rows)).map((_, i) => {
                        Array.from(Array(columns)).map((_, j) => {
                          return (
                            <div
                              data-row={i}
                              data-col={j}
                              style={{
                                borderLeft: "1px solid gray",
                                borderTop: "1px solid gray",
                                borderRight:
                                  j === columns - 1
                                    ? "1px solid gray"
                                    : undefined,
                                borderBottom:
                                  i === rows - 1 ? "1px solid gray" : undefined,
                              }}
                            />
                          );
                        });
                      })}
                    </div>
                  </div>
                );
              },
              execute: (state, api) => {
                console.log("hello");
              },
            },
          ]}
          value={value || ""}
          onChange={(newValue) => {
            onChange({ target: { name, value: newValue || "" } });
          }}
          previewOptions={{}}
        />
        <div style={{ padding: "50px 0 0 0" }} />
        <MDEditor.Markdown source={value || ""} />
        <MediaLib
          isOpen={mediaLibVisible}
          onChange={handleChangeAssets}
          onToggle={handleToggleMediaLib}
        />
      </Wrapper>
      {error && (
        <Typography variant="pi" textColor="danger600">
          {formatMessage({ id: error, defaultMessage: error })}
        </Typography>
      )}
      {description && (
        <Typography variant="pi">{formatMessage(description)}</Typography>
      )}
    </Stack>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Editor;
