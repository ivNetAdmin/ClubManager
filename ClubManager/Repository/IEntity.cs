using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClubManager.Repository
{
    public interface IEntity
    {
        long Id { get; set; }
        DateTime CreateDate { get; set; }
    }
}
