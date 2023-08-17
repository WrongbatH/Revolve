import React, { useEffect, useState } from 'react';
import CustomerTaskTable from '../componenets/table';
import { customerData } from '../types/customer/Data';
import { getCustomersByUser } from '../apiCalls/apiCalls';

export default function Page() {
  const [customerData, setCusomterData] = useState<customerData[]>([]);

  useEffect(() => {
    // call api and assign customerdata;
    getCustomersByUser('me, im the user :)').then(
      (res) => {
        console.log(res);
        res == undefined ? null : setCusomterData(res);
      }
    );
  },
  [],
  );



  return (
    <>
      <CustomerTaskTable Data={customerData}/>
    </>
  );
}