import Button from "@/components/ui/button";
import InputText from "@/components/ui/input-text";
import { useState } from "react";
import CheckBox from "../ui/check-box";

export interface Applicant {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  isPrimary?: boolean;
  id?: string;
}

export interface ApplicantFormProps {
  onSubmit: (data: Applicant) => void;
}

export const ApplicantForm = ({
  onSubmit
}: ApplicantFormProps): JSX.Element => {
  const [formData, setFormData] = useState<Applicant>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    isPrimary: true
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    field: keyof Applicant,
    value: string | boolean
  ) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" }); // Clear error message on input change
  };

  const preSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform form validation here
    const newErrors: Record<string, string> = {};

    Object.keys(formData).forEach((field) => {
      if (!formData[field as keyof Applicant]) {
        newErrors[field] = "This is required.";
      }
    });

    // Email validation using a simple regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit(formData);

      // Clear the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        isPrimary: true
      });
    }
  };

  return (
    <form>
      <div className="flex flex-col ">
        <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-4">
          <InputText
            label="First name"
            errorMessage={errors.firstName}
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />

          <InputText
            label="Last name"
            errorMessage={errors.lastName}
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
        </div>

        <InputText
          label="Email"
          errorMessage={errors.email}
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />

        <InputText
          label="Mobile"
          errorMessage={errors.mobile}
          value={formData.mobile}
          onChange={(e) => handleInputChange("mobile", e.target.value)}
        />

        <CheckBox
          label="Primary"
          checked={formData.isPrimary}
          onChange={(e) => handleInputChange("isPrimary", e.target.checked)}
        />

        <div className="flex justify-around my-8">
          <Button type="submit" label="Save" onClick={preSubmit} />
        </div>
      </div>
    </form>
  );
};
