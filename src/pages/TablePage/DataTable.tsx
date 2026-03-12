import { Table, Button, Input, Modal, Form, Card, Tag, Space } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  PlusOutlined,
  DownloadOutlined
} from "@ant-design/icons";
import { useState } from "react";
import Papa from "papaparse";

const generateData = (count:number) => {
 return Array.from({ length: count }).map((_, i) => ({
  key: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@mail.com`,
  role: ["Admin", "User", "Manager"][i % 3]
 }));
};

const allData = generateData(120);

export default function DataTable() {

 const [data,setData] = useState(allData.slice(0,10));
 const [page,setPage] = useState(1);
 const [search,setSearch] = useState("");
 const [modalOpen,setModalOpen] = useState(false);
 const [editingRow,setEditingRow] = useState<any>(null);

 const [form] = Form.useForm();

 const pageSize = 10;

 const handlePageChange = (pageNumber:number)=>{
  setPage(pageNumber);

  const start = (pageNumber-1)*pageSize;
  const end = start + pageSize;

  setData(allData.slice(start,end));
 };

 const filteredData = data.filter(item =>
  item.name.toLowerCase().includes(search.toLowerCase())
 );

 const openEdit = (record:any)=>{
  setEditingRow(record);
  form.setFieldsValue(record);
  setModalOpen(true);
 };

 const deleteRow = (key:number)=>{
  setData(data.filter(item=>item.key !== key));
 };

 const saveEdit = ()=>{
  form.validateFields().then(values=>{
   const newData = data.map(item =>
    item.key === editingRow.key ? {...item,...values} : item
   );

   setData(newData);
   setModalOpen(false);
  });
 };

 const exportCSV = ()=>{
  const csv = Papa.unparse(allData);
  const blob = new Blob([csv]);

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "users.csv";
  a.click();
 };

 const columns = [

  {
   title:"Name",
   dataIndex:"name",
   sorter:(a:any,b:any)=>a.name.localeCompare(b.name)
  },

  {
   title:"Email",
   dataIndex:"email"
  },

  {
   title:"Role",
   dataIndex:"role",
   render:(role:string)=>{

    const color =
     role === "Admin" ? "red" :
     role === "Manager" ? "blue" : "green";

    return <Tag color={color}>{role}</Tag>;
   }
  },

  {
   title:"Actions",
   render:(_:any,record:any)=>(
    <Space>

     <Button
      icon={<EyeOutlined />}
      type="default"
     />

     <Button
      icon={<EditOutlined />}
      onClick={()=>openEdit(record)}
     />

     <Button
      icon={<DeleteOutlined />}
      danger
      onClick={()=>deleteRow(record.key)}
     />

    </Space>
   )
  }

 ];

 return (

  <Card
   title="Enterprise User Management"
   style={{borderRadius:10}}
   extra={
    <Space>

     <Input
      placeholder="Search user..."
      onChange={(e)=>setSearch(e.target.value)}
      style={{width:200}}
     />

     <Button
      icon={<DownloadOutlined />}
      onClick={exportCSV}
     >
      Export
     </Button>

     <Button
      type="primary"
      icon={<PlusOutlined />}
      onClick={()=>setModalOpen(true)}
     >
      Add User
     </Button>

    </Space>
   }
  >

   <Table
    columns={columns}
    dataSource={filteredData}
    pagination={{
     current:page,
     pageSize:pageSize,
     total:allData.length,
     onChange:handlePageChange
    }}
    rowHoverable
   />

   <Modal
    title="Edit User"
    open={modalOpen}
    onOk={saveEdit}
    onCancel={()=>setModalOpen(false)}
   >

    <Form form={form} layout="vertical">

     <Form.Item
      name="name"
      label="Name"
      rules={[{required:true}]}
     >
      <Input/>
     </Form.Item>

     <Form.Item
      name="email"
      label="Email"
      rules={[{required:true,type:"email"}]}
     >
      <Input/>
     </Form.Item>

     <Form.Item
      name="role"
      label="Role"
      rules={[{required:true}]}
     >
      <Input/>
     </Form.Item>

    </Form>

   </Modal>

  </Card>
 );
}