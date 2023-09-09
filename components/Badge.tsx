export enum Color {
    GREEN,
    RED,
    PURPLE,
    BLUE,
    PINK,
    ORANGE,
}

let colorBgLight = new Map([
    [Color.GREEN, 'bg-light-green'],
    [Color.RED, 'bg-light-red'],
    [Color.PURPLE, 'bg-light-purple'],
    [Color.BLUE, 'bg-light-blue'],
    [Color.PINK, 'bg-light-pink'],
    [Color.ORANGE, 'bg-light-orange']
]);

let colorBgDark = new Map([
    [Color.GREEN, 'bg-dark-green'],
    [Color.RED, 'bg-dark-red'],
    [Color.PURPLE, 'bg-dark-purple'],
    [Color.BLUE, 'bg-dark-blue'],
    [Color.PINK, 'bg-dark-pink'],
    [Color.ORANGE, 'bg-dark-orange']
]);

let colorText = new Map([
    [Color.GREEN, 'text-dark-green'],
    [Color.RED, 'text-dark-red'],
    [Color.PURPLE, 'text-dark-purple'],
    [Color.BLUE, 'text-dark-blue'],
    [Color.PINK, 'text-dark-pink'],
    [Color.ORANGE, 'text-dark-orange']
]);

type BadgeProps = {
    text: string
    dot: boolean
    color: Color
}

export function Badge(props: BadgeProps) {
    return (
        <div className={`flex justify-center items-center h-[25px] w-fit px-2 rounded-[10px] ${colorBgLight.get(props.color)}`}>
            <div className='flex justify-between items-center h-fit content-center'>
                {props.dot && (
                    <div className={`h-[6px] w-[6px] mr-1 ${colorBgDark.get(props.color)} rounded-full`}>
                    </div>
                )
                }
                <div className={`font-semibold  tracking-wider text-xs ${colorText.get(props.color)}`}>
                    {props.text}
                </div>
            </div>
        </div >
    )
}
