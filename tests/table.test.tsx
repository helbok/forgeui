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
