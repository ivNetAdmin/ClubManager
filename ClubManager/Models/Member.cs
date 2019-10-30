using System;
using ClubManager.Repository;

namespace ClubManager.Models
{
    public class Member : IEntity
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
