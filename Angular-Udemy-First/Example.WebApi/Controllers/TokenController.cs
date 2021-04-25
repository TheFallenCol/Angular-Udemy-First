using System;
using Example.Models;
using Example.UnitOfWork;
using Example.WebApi.Authentication;
using Microsoft.AspNetCore.Mvc;

namespace Example.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        private readonly ITokenProvider _tokenProvider;
        private readonly IUnitOfWork _unitOfWork;

        public TokenController(ITokenProvider tokenProvider, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _tokenProvider = tokenProvider;
        }

        [HttpPost]
        public IActionResult Post([FromBody]User userLogin)
        {
            var user = _unitOfWork.User.ValidateUser(userLogin.Email, userLogin.Password);
            
            if (user == null)
                return Unauthorized(new UnauthorizedAccessException());

            return Ok(new JsonWebToken()
            {
                AccessToken = _tokenProvider.CreateToke(user, DateTime.UtcNow.AddHours(8)),
                ExpiresIn = 480 //Minutos expiracion token
            });
        }
    }
}
