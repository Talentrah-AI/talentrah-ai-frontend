import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function SecurityAndPrivacy() {
  const [password, setPassword] = useState("0000");
  const [timeout, setTimeout] = useState("30");

  const [editField, setEditField] = useState<"password" | "timeout" | null>(
    null
  );
  const [inputValue, setInputValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tempPassword, setTempPassword] = useState("");
  const [tempTimeOut, setTempTimeOut] = useState("30");

  const handleEdit = (field: "password" | "timeout") => {
    setEditField(field);
    setInputValue(field === "password" ? password : timeout);
    setIsEditing(true);
  };

  const handleCancel = () => {
    // Revert to the original password
    setTempPassword(password);
    setIsEditing(false);
  };

  const handleSave = () => {
    if (editField === "password") setPassword(tempPassword);
    if (editField === "timeout") setTimeout(tempTimeOut);
    setIsEditing(false);
  };

  return (
    <div className="py-[32px] px-[27px] gap-[40px]">
      <div className="flex gap-[82px] text-[12px] border-b pb-5 ">
        <div className="w-[302px]">
          <h2 className="text-bold ">PASSWORD SETTING</h2>

          <span className="text-grey mt-5">
            Set the password requirements for user accounts. Ensure your
            password has 8 letters, 1 special characters and uppercase letters.
          </span>
        </div>
        <div className="w-[694px] gap-[10px]">
          <Label>Password</Label>
          <div className="mt-5 flex gap-[10px] items-center w-full">
            <div className="w-[632px] border border-grey rounded-[12px] flex px-[10px] py-[2px] gap[5px]">
              <Input
                id="password"
                onChange={(e) => setTempPassword(e.target.value)}
                type={visible ? "text" : "password"}
                value={isEditing ? tempPassword : password}
                className="border-none"
                disabled={!isEditing}
              />
              <button
                type="button"
                onClick={() => {
                  setVisible((prev) => !prev);
                }}
                className=""
                aria-label={visible ? "Hide password" : "Show password"}
              >
                {visible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {isEditing ? (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSave}
                  className="bg-blue-500 text-white hover:bg-blue-600"
                >
                  Save
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCancel}
                  className="text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleEdit("password")}
                className="text-gray-600 hover:bg-gray-100"
              >
                Edit
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex gap-[82px] text-[12px]">
          <div className="w-[302px]">
            <h2 className="text-bold ">SESSION TIMEOUT</h2>

            <span className="text-grey mt-5">
              Set the session timeout duration for your account. This determines
              how long you can remain inactive before being automatically signed
              out for security purposes.
            </span>
          </div>
          <div className="w-[694px] gap-[10px]">
            <Label>Password</Label>
            <div className="mt-5 flex gap-[10px] items-center w-full">
              <div className="w-[632px] border border-grey rounded-[12px] flex px-[10px] py-[2px] gap[5px]">
                <Select value={tempTimeOut} onValueChange={setTempTimeOut}>
                  <SelectTrigger className="w-full border-none">
                    <SelectValue placeholder={`${timeout} mins`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15" className="text-sm">
                      15 mins
                    </SelectItem>
                    <SelectItem value="30" className="text-sm">
                      30 mins
                    </SelectItem>
                    <SelectItem value="1" className="text-sm">
                      1 hour
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleSave}
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
