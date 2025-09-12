import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Table } from "../src/components/Table";

const data = [{ id: 1, name: "Ada" }];

describe("Table", () => {
  it("renders column headers and rows", () => {
    render(
      <Table
        data={data}
        columns={[{ key: "name", header: "Name" }]}
        rowKey={(row) => row.id}
      />,
    );
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Ada")).toBeInTheDocument();
  });
});

describe("Table empty state", () => {
  it("renders the empty message", () => {
    render(<Table data={[]} columns={[{ key: "name", header: "Name" }]} rowKey={(r) => r.id} />);
    expect(screen.getByText("No rows to display.")).toBeInTheDocument();
  });
});

describe("Table row keys", () => {
  it("renders a row per item", () => {
    render(<Table data={[{ id: 1, name: "A" }, { id: 2, name: "B" }]} columns={[{ key: "name", header: "Name" }]} rowKey={(r) => r.id} />);
    expect(screen.getAllByRole("row")).toHaveLength(3);
  });
});

describe("Table sorting", () => {
  it("sorts rows ascending", async () => {
    const user = userEvent.setup();
    const rows = [{ id: 1, name: "B" }, { id: 2, name: "A" }];
    render(<Table data={rows} columns={[{ key: "name", header: "Name", sortable: true, sortValue: (r) => r.name }]} rowKey={(r) => r.id} />);
    await user.click(screen.getByRole("button", { name: "Name" }));
    expect(screen.getAllByRole("row")[1]).toHaveTextContent("A");
  });
});

describe("Table custom cell render", () => {
  it("uses the custom render function", () => {
    render(<Table data={[{ id: 1, name: "A" }]} columns={[{ key: "name", header: "Name", render: (r) => <strong>{r.name}</strong> }]} rowKey={(r) => r.id} />);
    expect(screen.getByText("A")).toBeInTheDocument();
  });
});
