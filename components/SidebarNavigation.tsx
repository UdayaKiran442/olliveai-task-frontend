type ISideBarNavigationProps = {
    children: React.ReactNode;
    label: string;
    view: string
}

export function SideBarNavigation({children, label, view}: ISideBarNavigationProps) {
    return (
        <div>
            <div className={`flex gap-1 items-center mt-6 p-2 cursor-pointer`}>
                {children}
                <p className={`font-semibold text-sm ${label === view ? "font-bold text-black" : "text-gray-300"} `}>{label}</p>
            </div>
        </div>
    )
}