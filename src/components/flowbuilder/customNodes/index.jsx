import Demo from "./Trigger";
import Trigger from "./nodes/Trigger";

export default {
    Trigger : (props)=><Trigger {...props}/>,
    TriggerTypeA : (props)=><Demo  triggerType="Trigger" onlySource {...props}/>,
    TriggerTypeB : (props)=><Demo triggerType="Trigger Split" targetSplitSource {...props}/>,
    TriggerTypeC : (props)=><Demo triggerType="Time" bothSourceTarget {...props}/>,
    TriggerTypeD : (props)=><Demo triggerType="Low cart value Email#1" onlyTarget {...props}/>
}