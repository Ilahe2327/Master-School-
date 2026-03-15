'use client'
import { useEffect, useState } from "react"
import Plasma from "@/ui/Plasma"

export default function Background() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="fixed inset-0 -z-10">
            <Plasma
                color="#0d92f1"
                speed={0.6}
                direction="forward"
                scale={1.1}
                opacity={0.6}
                mouseInteractive={true}
            />
        </div>
    )
}