// store/useActiveTab.ts
'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface TabStore {
    active: string
    setActive: (tab: string) => void
}

export const useActiveTab = create<TabStore>()(
    persist(
        (set) => ({
            active: '',
            setActive: (tab) => set({ active: tab }),
        }),
        {
            name: 'active-tab',
            storage: {
                getItem: (name) => {
                    if (typeof window === 'undefined') return null
                    const value = sessionStorage.getItem(name)
                    return value ? JSON.parse(value) : null
                },
                setItem: (name, value) => {
                    if (typeof window === 'undefined') return
                    sessionStorage.setItem(name, JSON.stringify(value))
                },
                removeItem: (name) => {
                    if (typeof window === 'undefined') return
                    sessionStorage.removeItem(name)
                },
            },
        }
    )
)
