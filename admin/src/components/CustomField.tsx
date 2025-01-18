import { FC as FunctionComponent, useState, useEffect, useMemo } from "react";
import { Flex, Field } from "@strapi/design-system";
import type { Schema } from "@strapi/types";
import { commands, ICommand } from "@uiw/react-md-editor";
import { useIntl } from "react-intl";
import { styled } from "styled-components";
import "@uiw/react-markdown-preview/markdown.css";
import { PLUGIN_ID } from "../utils/pluginId";
import MediaLib from "./MediaLib";
import { useField } from "@strapi/strapi/admin";
import assetsToMarkdown from "../utils/assetsToMarkdown";
import CustomMDEditor from "./CustomMDEditor";

const Wrapper = styled.div`
  flex-basis: 100%;
  > div:nth-child(2) {
    display: none;
  }
  .w-md-editor-bar {
    display: none;
  }
  .w-md-editor {
    code[class*="language-"],
    pre[class*="language-"] {
      color: inherit;
    }
    .w-md-editor-text-pre {
      padding: 0;
    }
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
    ul,
    ol {
      list-style: inherit;
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
    z-index: 11;
  }
  .w-md-editor-text {
    margin: 0;
  }
  .w-md-editor-preview ol {
    list-style: auto;
  }
`;

interface FieldProps {
  name: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  value: string;
  intlLabel: {
    id: string;
    defaultMessage: string;
  };
  disabled?: boolean;
  error?: string;
  description?: {
    id: string;
    defaultMessage: string;
  };
  required?: boolean;
  attribute?: any; // TO FIX
  labelAction?: React.ReactNode; //TO FIX TO CHECK
}

interface CursorPosition {
  start: number;
  end: number;
}

const CustomField: FunctionComponent<FieldProps> = ({
  attribute,
  name,
  disabled,
  labelAction,
  required,
  description,
  error,
  intlLabel,
}) => {
  // const { formatMessage } = useIntl();
  const field: any = useField(name);

  const formatMessage = (message: { id: string; defaultMessage: string }) =>
    message?.defaultMessage ?? "";
  const [mediaLibVisible, setMediaLibVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState<CursorPosition | null>(
    null
  );

  const handleToggleMediaLib = () => setMediaLibVisible((prev) => !prev);

  const updateFieldValue = (value: any) => {
    field.onChange({ target: { name, value: value } });
  };

  const handleChangeAssets = (assets: Schema.Attribute.MediaValue<true>) => {
    let output;
    const assetsString = assetsToMarkdown(assets);

    if (cursorPosition) {
      output =
        field.value.slice(0, cursorPosition.start) +
        assetsString +
        field.value.slice(cursorPosition.end);
    } else {
      output = field.value + assetsString;
    }

    updateFieldValue(output);
    handleToggleMediaLib();
  };

  const [config, setConfig] = useState<{ toolbarCommands?: string[] }>({});

  const toolbarCommands = useMemo(() => {
    const mediaLibraryButton: ICommand = {
      name: "media",
      keyCommand: "media",
      buttonProps: { "aria-label": "Insert media" },
      icon: (
        <svg width="12" height="12" viewBox="0 0 20 20">
          <path
            fill="currentColor"
            d="M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z"
          ></path>
        </svg>
      ),
      execute: (state, _api) => {
        setCursorPosition(state.selection);
        handleToggleMediaLib();
      },
    };
    if (!config?.toolbarCommands) {
      return [
        ...commands.getCommands(),
        commands.divider,
        mediaLibraryButton,
      ] as ICommand[];
    }
    const customCommands = config?.toolbarCommands
      ?.map((config) => {
        if (config === "mediaLibraryButton") return mediaLibraryButton;
        if (
          config in commands &&
          commands[config as unknown as keyof typeof commands]
        ) {
          return commands[
            config as unknown as keyof typeof commands
          ] as ICommand;
        }
      })
      .filter((command): command is ICommand => command !== undefined);

    return customCommands;
  }, [JSON.stringify(config)]);

  useEffect(() => {
    fetch(`/${PLUGIN_ID}`)
      .then((response) => response.json())
      .then((data) => {
        setConfig(data);
      });
  }, []);

  return (
    <Field.Root
      name={name}
      id={name}
      error={error}
      hint={description && formatMessage(description)}
    >
      <Flex spacing={1} alignItems="normal" style={{ flexDirection: "column" }}>
        <Field.Label action={labelAction} required={required}>
          {intlLabel ? formatMessage(intlLabel) : name}
        </Field.Label>
        <Wrapper>
          <CustomMDEditor
            hidden={disabled}
            value={field.value}
            onChange={updateFieldValue}
            commands={toolbarCommands}
          />
        </Wrapper>
        <Field.Hint />
        <Field.Error />
      </Flex>
      <MediaLib
        /*allowedTypes={['images']}*/
        isOpen={mediaLibVisible}
        onChange={handleChangeAssets}
        onToggle={handleToggleMediaLib}
      />
    </Field.Root>
  );
};

export { CustomField };
