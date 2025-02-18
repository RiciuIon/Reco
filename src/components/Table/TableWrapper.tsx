import React, { useEffect, useState } from "react";
import { Image, Table } from "antd";
import type { PaginationProps, TableColumnsType, TableProps } from "antd";
import { DataType, TableParams } from "../../types/types";
import { getData } from "../../mockData";
import slackImg from "../../assets/slack.png";
import { GetComponentProps } from "rc-table/lib/interface";
import SlideInDetails from "../../shared/SlideInDetails/SlideInDetails";

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: (name) => (
      <div className="name-wrapper">
        <div className="outlined-wrapper">
          <Image
            preview={false}
            style={{ borderRadius: "100%" }}
            src={slackImg}
          />
        </div>
        <p>{name}</p>
      </div>
    ),
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: true,
  },
  {
    title: "Connector",
    dataIndex: "connector",
    sorter: true,
    render: (connector) => (
      <div className="outlined-wrapper">
        <p className="connector-text">{connector}</p>
      </div>
    ),
  },
];

const TableWrapper: React.FC = () => {
  const [tableData, setTableData] = useState<DataType[]>([]);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [selectedRowData, setSelectedRowData] = useState<DataType>(
    {} as DataType
  );
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 25,
    },
  });

  useEffect(() => {
    getData().then((res) => {
      setTableData(res as DataType[]);
      setIsLoadingData(false);
    });
  }, []);

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    _,
    sorter,
    extra
  ) => {
    const { action } = extra;
    if (action === "paginate") {
      setTableParams({ pagination });
    }
    if (action === "sort") {
      console.log("sort handler");
      console.log(sorter);
    }
  };

  const handleOnRow: GetComponentProps<DataType> = (record, rowIndex) => {
    return {
      onClick: () => {
        if (record.name !== selectedRowData.name) {
          setSelectedRowData(record);
          setShowDetails(true);
        } else {
          setShowDetails(!showDetails);
        }
      },
    };
  };

  const handleChangeSize: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    console.log(current, pageSize);
  };

  return (
    <>
      <Table<DataType>
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        onRow={handleOnRow}
        loading={isLoadingData}
        pagination={{
          ...tableParams.pagination,
          position: ["bottomCenter"],
          showSizeChanger: true,
          onShowSizeChange: handleChangeSize,
          pageSizeOptions: ["25", "50"],
          simple: { readOnly: true },
        }}
      />
      {showDetails && <SlideInDetails data={selectedRowData} />}
    </>
  );
};

export default TableWrapper;
