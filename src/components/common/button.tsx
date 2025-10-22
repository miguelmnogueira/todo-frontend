import { Slot } from "@radix-ui/react-slot"
import type { Button as Base } from "../ui/button"

interface IButtonProps
    extends React.ComponentProps<typeof Base> { }

function Button({
    ...props
}: IButtonProps) {
    const Comp = props.asChild ? Slot : "button"

    return (
        <Comp
            data-slot="button"
            aria-label="Button"
            aria-description="Common button component"
            {...props}
        />
    )
}

export {
    Button,
}
