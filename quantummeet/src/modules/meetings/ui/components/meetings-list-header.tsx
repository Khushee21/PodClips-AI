"use client"
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { NewMeetingDailog } from "./new-meeting-dailog";
import { useState } from "react";
const MeetingsListHeader = () => {
    const [isDailogOpen, setIsDailogOpen] = useState(false);

    return (
        <>
            <NewMeetingDailog
                open={isDailogOpen}
                onOpenChange={setIsDailogOpen}
            />
            <div className="py-4 px-4 md:px-8 flex flex-col gap-y-4">
                <div className="flex items-center justify-between">
                    <h5 className="font-medium text-xl">My Meetings</h5>
                    <Button onClick={() => { setIsDailogOpen(true) }}>
                        <PlusIcon />
                        New Meeting
                    </Button>
                </div>
                <div className="flex items-center gap-x-2 p-1">

                </div>
            </div>
        </>
    )
}

export default MeetingsListHeader;








