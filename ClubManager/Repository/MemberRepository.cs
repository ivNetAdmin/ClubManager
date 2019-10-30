using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClubManager.Models;

namespace ClubManager.Repository
{
    public class MemberRepository : Repository<Member>, IMemberRepository
    {
        public MemberRepository(ClubDbContext dbContext)
            : base(dbContext)
        {

        }
    }
}