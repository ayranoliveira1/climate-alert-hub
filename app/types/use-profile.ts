export interface UserProfile {
   firstName: string;
   lastName: string;
   photoUrl: string;
   email: string;
   reciveEmail: boolean;
   city: string | null;
   state: string | null;
   country:
      | "brazil"
      | "unitedStates"
      | "philladelphia"
      | "russia"
      | "mocambique";
   isNewUser: boolean;
}
