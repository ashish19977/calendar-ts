import { CheckIcon, PencilIcon, TrashIcon, MoonIcon, SunIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import React from "react";

export type TIconProps = {
    name: 'check' | 'pencil' | 'trash' |  'moon'  | 'sun' | 'check-bedge',
    onClick?: () => unknown,
    height?: number,
    width?: number,
    className?: string,
}

export const Icon: React.FC<TIconProps> = (props: TIconProps) => {

    const { name, onClick = () => {}, height = 20, width = 20, className = 'icon' } = props

    const getIcon = (name: string) => {
        switch(name){
            case 'check': return <CheckIcon height={height} width={width}/>
            case 'pencil': return <PencilIcon height={height} width={width}/>
            case 'moon': return <MoonIcon height={height} width={width}/>
            case 'sun': return <SunIcon height={height} width={width}/>
            case 'check-bedge': return <CheckBadgeIcon height={height} width={width}/>
            case 'trash': return <TrashIcon height={height} width={width}/> 
        }
    }


    return(
        <div onClick={onClick} className={className}>
            {getIcon(name)}
        </div>
    )
}