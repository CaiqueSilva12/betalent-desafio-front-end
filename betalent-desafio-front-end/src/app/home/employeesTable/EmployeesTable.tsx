'use client';

import React, { useState, useMemo } from "react";
import Table from "@/components/table/Table";
import axiosInstance from "@/utils/ApiRequest";
import { CellProps, Column } from "react-table";
import { IEmploye } from "@/interfaces/IEmploye";
import { formatDate, formatPhoneNumber } from "@/utils/AuxiliaryFunctions";
import useSWR from "swr";
import './EmployeesTable.css';
import useWindowSize from "@/hooks/useWindowSize";
import { ChevronUpIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";


const fetcher = async (url: string) => {
  const response = await axiosInstance.get(url);
  return response.data;
};

const EmployeesTable = () => {
  const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const size = useWindowSize();
  const isSmallScreen = size.width !== undefined && size.width < 820;
  
  const { data: employees, error } = useSWR<IEmploye[]>('/employees', fetcher);

  const handleToggleRow = (rowIndex: number) => {
    setExpandedRowIndex(prevIndex => (prevIndex === rowIndex ? null : rowIndex));
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredEmployees = useMemo(() => {
    if (!employees) return [];
    return employees.filter(employee => {
      const lowerCaseTerm = searchTerm.toLowerCase();
      return (
        employee.name.toLowerCase().includes(lowerCaseTerm) ||
        employee.job.toLowerCase().includes(lowerCaseTerm) ||
        formatPhoneNumber(employee.phone).toLowerCase().includes(lowerCaseTerm)
      );
    });
  }, [employees, searchTerm]);

  const columns: Column<IEmploye>[] = useMemo(
    () => isSmallScreen
      ? [
        {
          Header: "Foto",
          accessor: "image",
          Cell: ({ value }: CellProps<IEmploye, string>) =>
            value ? (
            <div className="py-1">
              <img src={value} alt="Employee Image" className="rounded-full" style={{ width: '34px', height: '34px' }} />
            </div>
            ) : <></>,
        },
        {
          Header: "Nome",
          accessor: "name",
          Cell: ({ value }: CellProps<IEmploye, string>) =>
            value ? <p>{value}</p> : <></>,
        },
        {
          Header: <span></span>,
          accessor: "id",
          Cell: ({ row }: CellProps<IEmploye, string>) => (
            <button onClick={() => handleToggleRow(row.index)}>
              {expandedRowIndex === row.index? (
                <ChevronUpIcon className='h-6 w-6 text-blue-700' />
              ) : (
                <ChevronDownIcon className='h-6 w-6 text-blue-700' />
              )}
            </button>
          ),
        },
      ]
      : [
        {
          Header: "Foto",
          accessor: "image",
          Cell: ({ value }: CellProps<IEmploye, string>) =>
            value ? (
            <div className="py-1">
              <img src={value} alt="Employee Image" className="rounded-full" style={{ width: '34px', height: '34px' }} />
            </div>
            ) : <></>,
        },
        {
          Header: "Nome",
          accessor: "name",
          Cell: ({ value }: CellProps<IEmploye, string>) =>
            value ? <p>{value}</p> : <></>,
        },
        {
          Header: "Cargo",
          accessor: "job",
          Cell: ({ value }: CellProps<IEmploye, string>) =>
            value ? <p>{value}</p> : <></>,
        },
        {
          Header: "Data de Admissão",
          accessor: "admission_date",
          Cell: ({ value }: CellProps<IEmploye, string>) =>
            value ? <p>{formatDate(value)}</p> : <></>,
        },
        {
          Header: "Telefone",
          accessor: "phone",
          Cell: ({ value }: CellProps<IEmploye, string>) =>
            value ? <p>{formatPhoneNumber(value)}</p> : <></>,
        },
      ],
    [isSmallScreen, expandedRowIndex]
  );

  const expandedRowContent = (row: { original: IEmploye }) => (
    <div className="flex flex-col gap-2 py-2 px-12">
      {row.original.job && <p className="flex justify-between"><strong>Cargo:</strong> {row.original.job}</p>}
      {row.original.admission_date && <p className="flex justify-between"><strong>Data de Admissão:</strong> {formatDate(row.original.admission_date)}</p>}
      {row.original.phone && <p className="flex justify-between"><strong>Telefone:</strong> {formatPhoneNumber(row.original.phone)}</p>}
    </div>
  );

  if (!employees) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div
        className="
          flex 
          flex-col 
          gap-5 pt-5 
          md:flex-row 
          md:justify-between 
          md:items-center 
          md:pt-14 
          lg:flex-row 
          lg:justify-between 
          lg:items-center 
          lg:pt-14"
      >
        <h4 className="title">Funcionários</h4>
        <label htmlFor="search" className="relative flex items-center w-full md:w-auto">
          <input
            id="search"
            className="search__input w-full md:w-[335px]"
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleSearch}
          />
          <MagnifyingGlassIcon className='h-6 w-6 text-gray-300 absolute right-3'/>
        </label>
      </div>
      <div className="lg:pt-16 pt-5">
      <Table
        columns={columns}
        data={filteredEmployees}
        expandedRowIndex={expandedRowIndex}
        expandedRowContent={expandedRowContent}
      />
      </div>
    </div>
  );
};

export default EmployeesTable;
