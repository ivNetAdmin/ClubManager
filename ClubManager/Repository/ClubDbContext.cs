using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClubManager.Models;
using Microsoft.EntityFrameworkCore;

namespace ClubManager.Repository
{
    public class ClubDbContext : DbContext
    {
        public ClubDbContext(DbContextOptions<ClubDbContext> options)
            : base(options)
        {
        }

        public DbSet<Member> Members { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}