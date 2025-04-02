
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

export default function NotFound() {
    return (
        <Dialog open={true}>
            <DialogContent className="max-w-md p-6">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-gray-900">
                        Product Not Found
                    </DialogTitle>
                    <DialogDescription className="text-gray-600">
                        The product you&apos;re looking for doesn&apos;t exist or has been removed.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Link href="/" className="w-full ">
                        <Button className="w-full cursor-pointer ">Return to Dashboard</Button>
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
