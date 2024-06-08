import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ClubProps {
  club: {
    club_name: string;
    club_description: string;
  };
}
const Club = ({ club }: ClubProps) => {
  return (
    <div className="">
      <Card className=" ">
        <CardHeader className="p-3">
          <CardTitle className=" text-xl">{club.club_name}</CardTitle>
          <CardDescription className=" text-sm">
            {club.club_description.slice(0, 70)}
          </CardDescription>
        </CardHeader>
        <div className="p-3 pt-2 ">
          <img src="/assets/images/book.jpg" alt="book-club" />
        </div>
        <CardFooter>Follow</CardFooter>
      </Card>
    </div>
  );
};

export default Club;
