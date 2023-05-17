import { Sidebar } from "flowbite-react"
import { HiChartPie,HiInbox,HiUser,HiShoppingBag,HiArrowSmLeft,HiTable } from "react-icons/hi"
import Link from "next/link"
export default function Sidebare() {
  return (
    <div>
        <div className="w-fit bg-gray-100">
  <Sidebar aria-label="Default sidebar example" className="bg-gray-50">
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item
          href="#"
          icon={HiChartPie}
        >
          Dashboard
        </Sidebar.Item>

        <Sidebar.Item
          href="/admin/SetSlider"
          icon={HiTable}
        >
          Slider
        </Sidebar.Item>
        <Sidebar.Item
          
          icon={HiInbox}
          label="3"
        >
          Inbox
        </Sidebar.Item>
        
        <Sidebar.Item
          href="#"
          icon={HiUser}
        >
          Users
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={HiShoppingBag}
        >
          Products
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={HiArrowSmLeft}
        >
          Sign In
        </Sidebar.Item>
       
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
</div>
    </div>
  )
}
