import { DiscountsIcon, EmailIcon, OrderOnShopifyIcon, PaymentsLinkIcon, SMSIcon, ShopifyTagIcon, SplitIcon, TimeDelayIcon, VeirfyTagIcon, WhatsAppIcon } from "../../SvgIcons";
import Action from "./Action";

const actions = [
    {
        type : "email",
        nodeType : 'A',
        data :{title :  "Email",body : "Email Subsribers",icon : EmailIcon}
    },
    {
        type : "sms",
        nodeType : 'A',
        data :{title :  "SMS",body : "SMS Subsribers", icon : SMSIcon}
    },
    {
        type : "whatsaap",
        nodeType : 'A',
        data : {title : "Whatsaap",body : "Whatsaap Subsribers",icon : WhatsAppIcon}
    },
    {
        type : "addshopifytag",
        nodeType : 'A',
        data : {title : 'Add Shopify Tag',body : "",icon : ShopifyTagIcon}
    },
    {
        type : "verifyorderunicommerece",
        nodeType : 'A',
        data : {title : 'Verify Order On UniCommerece',body : "",icon : VeirfyTagIcon}
    },{
       type : "orderonshopify",
       nodeType : 'A',
       data : {title  : "Order on Shopify",body : "",icon : OrderOnShopifyIcon}
    },
    {
        type : "discounts",
        nodeType : 'A',
        data  : {title : "Discounts",body : "",icon : DiscountsIcon}
    },
    {
        type : "createpaymentslink",
        nodeType : "A",
        data : {title : "Create payments link",body : "",icon : PaymentsLinkIcon}
    }
]
const timing = [
    {
        type : "delay",
        nodeType : "B",
        data : { title : "Timing Delay",body : "",icon : TimeDelayIcon}
    }
]
const condition = [
    {
        type : "condition",
        nodeType : "C",
        data : {title : "Trigger Split",body : "",icon : SplitIcon}
    }
]
const ACTIONS = [
    {
      Action : ()=> <Action actions={actions} title="Actions" showDragDropText />
    },
    {
        Action : ()=><Action actions={timing} title="Timing"/>
    },
    {
        Action : ()=><Action actions={condition} title="Condition"/>
    }
]
export default ACTIONS;