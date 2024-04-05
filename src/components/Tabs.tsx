import React, { useId, useState } from "react";
import { cn } from "../utils/cn";

export interface TabItem {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  activeId?: string;
  defaultActiveId?: string;
  onChange?: (id: string) => void;
}

export const Tabs = ({
  items,
  activeId: controlledId,
  defaultActiveId,
  onChange,
}: TabsProps) => {
  const baseId = useId();
  const [internalId, setInternalId] = useState(
    defaultActiveId ?? items.find((item) => !item.disabled)?.id ?? items[0]?.id,
  );
  const isControlled = controlledId !== undefined;
  const activeId = isControlled ? controlledId : internalId;

  const select = (id: string) => {
    if (!isControlled) {
      setInternalId(id);
    }
    onChange?.(id);
  };

  const active = items.find((item) => item.id === activeId);

  return (
    <div className="fui-tabs">
      <div role="tablist" className="fui-tabs__list">
        {items.map((item) => (
          <button
            key={item.id}
            role="tab"
            id={`${baseId}-tab-${item.id}`}
            aria-selected={item.id === activeId}
            aria-controls={`${baseId}-panel-${item.id}`}
            disabled={item.disabled}
            className={cn(
              "fui-tabs__tab",
              item.id === activeId && "fui-tabs__tab--active",
            )}
            onClick={() => select(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-panel-${active?.id}`}
        aria-labelledby={`${baseId}-tab-${active?.id}`}
      >
        {active?.content}
      </div>
    </div>
  );
};

Tabs.displayName = "Tabs";
