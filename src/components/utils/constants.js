import Trigger from "../flowbuilder/nodesidebar/nodeTypes/trigger/Trigger";

export const connectOptions = {
    both : 1,
    source : 2,
    target : 3,
    oneTargetTwoSource : 4
}

export const triggerTypesOptions = {
    typeA : 'SMS',
    typeB : 'Email',
    typeC : 'Whatsaap'
}

export const activeNodeTypes = {
    trigger : Trigger,
}